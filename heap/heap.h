struct MinHeap
{
	unsigned size;
	unsigned capacity;
	int harr[10000];
};
// add to the heap
void insertKey( struct MinHeap *h, int k);
// check if the heap is empty
bool isEmpty( struct MinHeap *h);
// pop the minimum element
int extractMin( struct MinHeap *h);
