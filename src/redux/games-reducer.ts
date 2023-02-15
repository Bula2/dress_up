
export interface GamesState {
  data: {
    id: number,
    src: string,
    title: string,
    platform: string,
    price: number
  }[]
}

const initialState: GamesState = {
  data: [
    {id: 1, src: "/img/6.jpg", title: "Nike Blazer Mid 77", platform: "Nike", price: 8990},
    {id: 2, src: "/img/5.jpg", title: "Jordan Jumpman Polo", platform: "Jordan", price: 7990},
    {id: 3, src: "/img/4.jpg", title: "Jordan Jumpman Logo", platform: "Jordan", price: 12990},
    {id: 4, src: "/img/3.jpg", title: "Jordan x union", platform: "Jordan", price: 6990},
    {id: 5, src: "/img/2.jpg", title: "Supreme FW 22", platform: "Supreme", price: 6990},
    {id: 6, src: "/img/1.jpg", title: "Sacai X Nike", platform: "Nike", price: 22990},
    {id: 7, src: "/img/6.jpg", title: "Nike Blazer Mid 77", platform: "Nike", price: 8990},
    {id: 8, src: "/img/5.jpg", title: "Jordan Jumpman Polo", platform: "Jordan", price: 7990},
    {id: 9, src: "/img/4.jpg", title: "Jordan Jumpman Logo", platform: "Jordan", price: 12990},
    {id: 10, src: "/img/3.jpg", title: "Jordan x union", platform: "Jordan", price: 6990},
    {id: 11, src: "/img/2.jpg", title: "Supreme FW 22", platform: "Supreme", price: 6990},
    {id: 12, src: "/img/1.jpg", title: "Sacai X Nike", platform: "Nike", price: 22990},
  ]
}


export const gamesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return (state);
  }
}

export default gamesReducer