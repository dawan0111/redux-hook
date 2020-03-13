export type Todo = {
  id: number;
  title: string;
  content: string;
  complate: boolean;
  createdDateTime: Date;
  tags: string[];
}

export type TodoFormValue = {
  id?: string;
  title: string;
  content: string;
  tags: string[];
}

export type DialogPosition = 'under' | 'center' | 'top';