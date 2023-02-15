
export interface BestSellersState {
  data: {
    id: number,
    src: string,
    title: string
  }[]
}

const initialState: BestSellersState = {
  data: [
    {id: 1, src: "/img/6.jpg", title: "Nike Blazer Mid 77"},
    {id: 2, src: "/img/5.jpg", title: "Jordan Jumpman Polo"},
    {id: 3, src: "/img/4.jpg", title: "Jordan Jumpman Logo"},
    {id: 4, src: "/img/3.jpg", title: "Jordan x union"}
  ]
}

export const bestsellersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return (state);
  }
}

export default bestsellersReducer