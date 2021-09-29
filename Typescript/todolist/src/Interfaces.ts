export interface ListArrayObject {
    id: number;
    listContent: string;
    isChecked: boolean;
    isRemoved : boolean;
}

export interface ListBox {
    listData: { id: string | number | undefined; listContent: string; isChecked: boolean; isRemoved : boolean; },
    list : Array<ListArrayObject>,
    setList : any
  }
  

export interface InputSectionProp {
    list : Array<ListArrayObject>,
    currentActiveFilter : any,
    setList : any
}
  
export interface ListRenderingSection {
    filteredArray :  Array<ListArrayObject>,
    list :  Array<ListArrayObject>,
    setList :  any
  }
  