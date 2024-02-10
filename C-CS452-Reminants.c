#include <stdio.h>
#include "track_data_new.h"


// path find returns the distance from the start to the end
int Pathfind(const struct track_node *start, const struct track_node *end,
			 const struct track_node *track,
			 struct track_node *prev[TYPECOUNT][TRACK_MAX],
			 int distance[TYPECOUNT][TRACK_MAX])
{
	struct track_node *queue[TRACK_MAX]; // this is the queue of the tracks

	int queue_size = 0;
	int queue_head = 0;
	int queue_tail = 0;

	int visited[TYPECOUNT][TRACK_MAX];

	for (int i = 0; i < TRACK_MAX; i++)
	{
		for (int j = 0; j < TYPECOUNT; j++)
		{
			visited[j][i] = 0;
			distance[j][i] = 9999999;
		}
	}
	distance[start->type][start->num] = 0;
	prev[start->type][start->num] = start;
	queue[queue_tail] = start; // start from one track node
	queue_tail++;
	queue_size++;
	// start from one track node
	while (queue_size > 0)
	{
		struct track_node *current = queue[queue_head];
		queue_head++;
		queue_size--;
		//
		struct track_node *reverse = current->reverse;
		// if we have visited the current node, then we skip
		visited[current->type][current->num] = 1;
		if (current->type == NODE_BRANCH)
		{
			// we have found a branch
			struct track_node *curved = current->edge[DIR_CURVED].dest;
			// we have not visited the curved branch
			if (distance[curved->type][curved->num] >
				distance[current->type][current->num] + current->edge[DIR_CURVED].dist)
			{
				// we have found a shorter path to the curved branch
				prev[curved->type][curved->num] = current;
				distance[curved->type][curved->num] = distance[current->type][current->num] + current->edge[DIR_CURVED].dist;
				queue[queue_tail] = curved;
				queue_tail++;
				queue_size++;
			}
		}
		if (current->type != NODE_EXIT)
		{
			struct track_node *straight = current->edge[DIR_STRAIGHT].dest;
			if (distance[straight->type][straight->num] >
				distance[current->type][current->num] + current->edge[DIR_STRAIGHT].dist)
			{
				// we have found a shorter path to the straight branch
				prev[straight->type][straight->num] = current;
				distance[straight->type][straight->num] = distance[current->type][current->num] +
														  current->edge[DIR_STRAIGHT].dist;
				queue[queue_tail] = straight;
				queue_tail++;
				queue_size++;
			}
		}
		
		// this is the condition to only reverse on sensors
		if (current->type == NODE_SENSOR)
		{
			if (distance[reverse->type][reverse->num] > distance[current->type][current->num])
			{
				// we have found a shorter path to the straight branch
				prev[reverse->type][reverse->num] = current;
				distance[reverse->type][reverse->num] = distance[current->type][current->num];
				queue[queue_tail] = reverse;
				queue_tail++;
				queue_size++;
			}
		}
		
	}
	// if not visited, then there is no path
	if (visited[end->type][end->num] == 0)
	{
		return -1;
	}
	return (distance[end->type][end->num]);
}
// Train functions Begin
int parse_path(struct track_node *track,
			   struct track_node *start,
			   struct track_node *end,
			   struct track_node **branches,
			   int *branches_len,
			   char *mode,
			   int *mode_len,
			   struct track_node **sen_list,
			   int *sen_list_sz,
			   struct track_node **revlist,
			   int *revlist_len,
			   int distance[TYPECOUNT][TRACK_MAX])
{
	struct track_node *previouse_node[TYPECOUNT][TRACK_MAX];
	printf("start = %s, end = %s\n", start->name, end->name);
	int valid = Pathfind(start, end, track, previouse_node, distance);
	printf("distance = %d\n", distance[end->type][end->num]);
	// if distance is 9999999, then there is no path
	if (valid == -1)
	{
		return -1;
	}
	struct track_node *start_node = start;
	struct track_node *end_node = end;
	// get the path in two char arrays
	*branches_len = 0;
	*mode_len = 0;
	*sen_list_sz = 0;
	// compute the path
	while (end_node != start_node)
	{
		//
		struct track_node *prev_node = previouse_node[end_node->type][end_node->num];
		if (prev_node->type == NODE_BRANCH)
		{
			branches[*branches_len] = prev_node;
			*branches_len = *branches_len + 1;

			if (prev_node->edge[DIR_CURVED].dest == end_node)
			{
				// we have to switch the curved branch

				mode[*(mode_len)] = 'C';
				*(mode_len) = *(mode_len) + 1;
			}
			else
			{
				// we have to switch the straight branch

				mode[*(mode_len)] = 'S';
				*(mode_len) = *(mode_len) + 1;
			}
		}
		if (prev_node->type == NODE_SENSOR)
		{
			// we have to switch the straight branch
			sen_list[*(sen_list_sz)] = prev_node;
			*(sen_list_sz) = *(sen_list_sz) + 1;
		}
		// if it is reverse, we need to reverse the train
		if (prev_node->reverse == end_node)
		{

			revlist[(*revlist_len)] = prev_node;
			(*revlist_len)++;
		}

		end_node = previouse_node[end_node->type][end_node->num];
	}

	// print total distance

	return 0;
}
struct track_node *get_track_node_by_name(struct track_node *track, char *name)
{
	for (int i = 0; i < TRACK_MAX; i++)
	{
		if (0 == strcmp(track[i].name, name))
		{
			return &track[i];
		}
	}
	return 0;
}
void solonoid(int id, char state)
{
	printf("solonoid id = %d, state = %c\n", id, state);
}

void print_path(char track_id, char *start_str, char *end_str)
{
	struct track_node track[TRACK_MAX];
	struct track_node *revlist[TRACK_MAX];
	int revlist_len;
	if (track_id == 'a')
	{
		init_tracka(track);
	}
	else
	{
		init_trackb(track);
	}
	struct track_node *banches[TRACK_MAX];
	int branches_len;
	char mode[TRACK_MAX];

	int mode_len;
	struct track_node *sen_list[TRACK_MAX];
	int sen_list_sz;
	printf("start_str = %s, end_str = %s\n", start_str, end_str);
	struct track_node *start = get_track_node_by_name(track, start_str);
	struct track_node *end = get_track_node_by_name(track, end_str);
	int distance[TYPECOUNT][TRACK_MAX];
	parse_path(track, start, end,
			   banches, &branches_len,
			   mode, &mode_len,
			   sen_list, &sen_list_sz,
			   revlist, &revlist_len,
			   distance);
	// print the reverse list
	printf("revlist_len = %d\n", revlist_len);
	for (int i = 0; i < revlist_len; i++)
	{
		printf("%s ", revlist[i]->name);
		printf("\n");
	}
	//  print the sensors along with the distance to the end using the distance array
	// the distance from the start to the end is stored in distance[end->type][end->num]
	// the distance from the start to the current node is stored in distance[current->type][current->num]
	// find the distance from the current node to the end distance[end->type][end->num] - distance[current->type][current->num]
	printf("sen_list_sz = %d\n", sen_list_sz);
	for (int i = 0; i < sen_list_sz; i++)
	{
		printf("%s dist: %d\n", sen_list[i]->name, distance[end->type][end->num] - distance[sen_list[i]->type][sen_list[i]->num]);
	}

	// iterate through all the branch nodes
	printf("branches_len = %d\n", branches_len);
	for (int i = 0; i < branches_len; i++)
	{
		solonoid(banches[i]->num, mode[i]);
	}
}

//#define n 7
int get_ind(int *distance, int n, int stpdst)
{
	// initialize the track
	// track_node track[TRACK_MAX];
	// init_tracka(track);
	// give a list of array representing distance from the start to the end
	// generate 5 possitive integers
	// int max_dist = 10;
	//int distance[n] = {0, 1, 2, 3, 4, 8, max_dist};
	// make a new array of distance
	// set 
	int index = 0, max_dist = distance[n - 1];
	int val = max_dist - stpdst;
	// what is the index such that distance[index] is the closest node to the end that is further than dist_from_end
	int l = 0, r = n - 1;
	while (l < r)
	{
		// the non overflow version of (l + r) / 2
		int m = l + (r - l) / 2;
		if (distance[m] > val)
		{
			r = m - 1;
		}
		else
		{
			index = m;
			l = m;
		}
	}
	return r;
}
int main_test_reminant()
{
	print_path('a', "A3", "C8");
	// set the distance to be 10, 20, 40, 50 and 60 stopping distance is 12
	int distance[5] = {10, 20, 40, 50, 60};
	int n = 5;
	int stpdst = 12;
	int idx = get_ind(distance, n, stpdst);
	printf("The index is %d\n", idx);
	return 0;
}