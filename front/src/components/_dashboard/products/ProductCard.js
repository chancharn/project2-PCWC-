import PropTypes from 'prop-types';
import { Link as RouterLink, useNavigate  } from 'react-router-dom';
// material
import { Box, Card, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import ProductStore from '../../../store/ProductStore';
//



// ----------------------------------------------------------------------

const ProductImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

// ----------------------------------------------------------------------


export default function ShopProductCard({ product }) {
  const {product_id} = product;
  const navigate = useNavigate();

  return (
    <Card onClick={()=> {ProductStore.setProduct(product, product_id);  navigate('/dashboard/Calendar/', { replace: true }) } }>
      <Box sx={{ pt: '100%', position: 'relative' }}>  
        <ProductImgStyle alt={product_id.name} src={product_id.imgUrl} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link to="/dashboard/Calendar/" color="inherit" underline="hover" component={RouterLink} >
          <Typography variant="subtitle2" noWrap >
            {product_id.name}
          </Typography>
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
         
          <Typography variant="subtitle1">
            <Typography
              component="span"
              variant="body1"
              sx={{
                color: 'text.disabled',
                textDecoration: 'line-through'
              }}
            >
              
            </Typography>
            &nbsp;
           
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
