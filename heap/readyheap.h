#include <stdbool.h>
#include <stdint.h>
#include <stdio.h>
#include <limits.h>
struct state {
	int pid;
	int priority;
	uint64_t time;
};
struct MinHeapState
{
	unsigned size;
	unsigned capacity;
	struct state  harr[10000];
};

void bubbleDown_state_heap( struct MinHeapState *h, int i);
// add to the heap
void insertKey_state_heap( struct MinHeapState *h, struct state k);
// check if the heap is empty
uint8_t isEmpty_state_heap( struct MinHeapState *h);
// pop the minimum element
struct state extractMin_state_heap( struct MinHeapState *h);
void printState(struct state s);