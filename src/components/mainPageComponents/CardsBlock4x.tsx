import React, { FC } from 'react'
import { IProduct } from '../../types/types'
import Card from '../Card'

const CardsBlock4x: FC = () => {
  const products: IProduct[] = [
    {
      "id": 1,
      "imageURL": "https://sun9-33.userapi.com/s/v1/if2/rvjE0VDYL3A3WT4Xsn3k6S5Y7c8pZ7DFcVMiC17tr1vFAS5fKr4FUn8jyviNlM65YWmlKqyaU_n4PB2BrKi443SR.jpg?size=450x450&quality=96&type=album",
      "name": "Banger 'Summer Juicy'",
      "type": "tobacco",
      "size": "25g",
      "price": 220,
      "category": 0,
      "rating": 13
    },
    {
      "id": 12,
      "imageURL": "https://sun9-78.userapi.com/s/v1/if2/svwiY9uDCiGh2Neu47IrxQLMVULHVG2SX0tBUPGfGlZt0rrC7g0D0K8a16MynzYDA-N--Pf2VPkYuAD_jefaS93I.jpg?size=450x450&quality=96&type=album",
      "name": "Banger 'Holostyak'",
      "type": "tobacco",
      "size": "25g",
      "price": 220,
      "category": 4,
      "rating": 82
    },
    {
      "id": 19,
      "imageURL": "https://sun9-36.userapi.com/s/v1/if2/oNXng8HqSf9E1uWzz4bxbmrdSwfeaL3Kg8nNVpwAjS7K_X7AnwKCX7QGhwHLgL88HNymnR6Zt6nK1YTLLpSi2djN.jpg?size=450x450&quality=96&type=album",
      "name": "Banger 'Batumi'",
      "type": "tobacco",
      "size": "100g",
      "price": 750,
      "category": 0,
      "rating": 24
    },
    {
      "id": 40,
      "imageURL": "https://sun9-31.userapi.com/s/v1/if2/eOpMXG_KnmyuItvfRvgcvBcR4omFwEtgBkuLrVmRLF-PlxFbhmBMXLbyezCCsg1q58XYNXqketZeAhyTdh_aD0H2.jpg?size=450x450&quality=96&type=album",
      "name": "Endorphin 'Pomegranate'",
      "type": "tobacco",
      "size": "60g",
      "price": 310,
      "category": 0,
      "rating": 47
    }
  ]
  return (
    <div className="cards-block-4x">
      <div className="container">
        {
          products.map(prod => 
            <Card
              key={prod.id}
              product={prod}
            />
          )
        }
      </div>
    </div>
  )
}

export default CardsBlock4x