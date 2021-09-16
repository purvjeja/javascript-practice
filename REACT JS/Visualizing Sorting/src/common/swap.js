export default function swap(array,swapElementA,swapElementB) {
    const temp = array[swapElementA];
    array[swapElementA] = array[swapElementB];
    array[swapElementB] = temp;
}