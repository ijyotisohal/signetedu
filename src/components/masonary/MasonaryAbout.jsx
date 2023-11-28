import {React} from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

export default function ImageMasonry() {
  return (
    <Box sx={{ width: 570, minHeight: 670 }}>
      <Masonry columns={2} spacing={2}>
        {itemData.map((item, index) => (
          <div key={index}>
            {/* <Label>{index + 1}</Label> */}
            <img
              src={`${item.img}?w=162&auto=format`}
              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{
              
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
}

const itemData = [
  {
    img: '/assets/images/gallery/gallery1.jpg',
    title: 'Fern',
  },
  {
    img: '/assets/images/gallery/gallery2.jpg',
    title: 'Snacks',
  },
  {
    img: '/assets/images/gallery/gallery3.jpg',
    title: 'Tower',
  },
  {
    img: '/assets/images/gallery/gallery4.jpg',
    title: 'Mushrooms',
  }
];