import { useFormik } from 'formik';
import { useState } from 'react';
// material
import { Container, Stack, Typography ,Button  } from '@mui/material';
// components
import Page from '../components/Page';
import {
  ProductList,
} from '../components/_dashboard/products';
//
import PRODUCTS from '../_mocks_/products';
import { useEffect } from 'react';
import productStore from '../store/ProductStore';
import { Menu} from 'semantic-ui-react'

// ----------------------------------------------------------------------

export default function EcommerceShop() {
  

  return (
    <Page title="Dashboard: Products | Minimal-UI">
      <Container>
      <Stack>         
        <Menu compact>
            <Menu.Item onClick={() => { productStore.selectAll('0');  } }
          name='korea'
            >국내     
        </Menu.Item>
        
        <Menu.Item onClick={()=> { productStore.selectAll('1');   } }
          name='usa'
        >해외/ 미국
        </Menu.Item>
        <Menu.Item  onClick={()=>{ productStore.selectAll('2');  }}
          name='europe'
        >해외/ 유럽
        </Menu.Item>
        <Menu.Item onClick={()=> {productStore.selectAll('3');}}
          name='southeastAsia'
        >동남아시아
            </Menu.Item>
            <Menu.Item onClick={()=> { productStore.selectAll('4'); }}
          name='eastAsia'
        >동아시아
            </Menu.Item>
            <Menu.Item onClick={()=> { productStore.selectAll('9');  }}
          name='eastAsia'
        >전체
            </Menu.Item>
        </Menu>
        </Stack>
    
        <Stack
          direction="row"
          flexWrap="wrap-reverse"
          alignItems="center"
          justifyContent="flex-end"
          sx={{ mb: 3 }}
        >
        </Stack>
        <ProductList />
      </Container>
    </Page>
  );
}
