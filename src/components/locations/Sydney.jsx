import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTranslations } from '../../actions/languageActions';
import Loading from '../loading/Loading';

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

export default function Sydney() {
    const dispatch = useDispatch();
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const translations = useSelector(
    (state) => state.language.translations[selectedLanguage]
  );

  React.useEffect(() => {
    dispatch(fetchTranslations(selectedLanguage));
  }, [dispatch, selectedLanguage]);

  if (!translations) {
    return <div>
      <Loading/>
    </div>; // Show loading state while translations are being fetched
  }
  const { forms,sydney } = translations;
  return (
   <>
     <Header/>
     <div className="sub-course-banner pt--60">
        <div className="container">
          <div className="sub-banner-text pt-80">
            <div className="row align-items-center">
              <div className="col-md-6 banner-sub-text-one">
                <h3 className="banner-sub-ttile">{forms.banner.title}</h3>
                <p className="banner-sub-descr">
                 {forms.banner.description}
                </p>
                <p className="sub-banner-cap">
                {forms.banner.descriptionTwo}
                </p>
              </div>
              <div className="col-md-5 banner-sub-text-two pt--100">
                {/* <div class="wrapper">
	<svg>
		<text x="50%" y="50%" dy=".35em" text-anchor="middle">
			Signet Institute 
		</text>
	</svg>
  <svg>
		<text x="50%" y="50%" dy=".35em" text-anchor="middle">
			 Of Australia
		</text>
	</svg>
</div> */}
                <div className="sub-c-banner">
                  <img src="/img/about/boy.png" alt="banner" />
                </div>
                <div className="sub-c-banner-tw">
                  <img
                    className="sp-one"
                    src="/assets/images/shapes/circle-dots-two.png"
                    alt="banner"
                  />
                </div>
                <div className="sub-c-banner-th">
                  <img
                    className="sp-twoo"
                    src="https://themes.envytheme.com/ellen/wp-content/uploads/2022/07/shape-1.png"
                    alt="banner"
                  />
                  <img
                    class="sp-three"
                    src="/img/brushes/contact/2.png"
                    alt="banner"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div className="melbourne-sec pt--60">
        <div className="container ">
        <div className="sydney-text pt--60">
            <h3 className="title-sydn">{sydney.titleOne}</h3>
            <p className="sydney-desc">{sydney.descriptionOne}</p>
            <p className="sydney-desc">{sydney.descriptionTwo}</p>
        <h4 className="explore-sydney-tit">{sydney.titleTwo}</h4>
        <p className="sydney-desc">{sydney.descriptionThree}</p>
        </div>
        <Box sx={{ width: "100%", minHeight: 829 }}>
      <Masonry columns={3} spacing={2}>
        {itemData.map((item, index) => (
          <div key={index}>
            {/* <Label>{index + 1}</Label>s */}
            <img
              src={`${item.img}?w=162&auto=format`}
              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
    <div className="sydney-text pt-40 pb-100">
            <h3 className="title-sydn">{sydney.titleThree}</h3>
            <p className="sydney-desc">{sydney.descriptionFour}</p>
            <p className="sydney-desc">{sydney.descriptionFive}</p>
            <p className="sydney-desc">{sydney.descriptionSix}</p>
        </div>
        </div>
    </div>
    <Footer/>
   </>
  );
}

const itemData = [
  {
    img: '/images/sydney/img-1.jpg',
    title: 'Fern',
  },
  {
    img: '/images/sydney/img-2.jpg',
    title: 'Snacks',
  },
  {
    img: '/images/sydney/img-3.jpg',
    title: 'Mushrooms',
  },
  {
    img: '/images/sydney/img-4.jpg',
    title: 'Tower',
  },
  {
    img: '/images/sydney/img-5.jpg',
    title: 'Sea star',
  },
  {
    img: '/images/sydney/img-6.jpg',
    title: 'Honey',
  },
  {
    img: '/images/sydney/img-7.jpg',
    title: 'Basketball',
  },
  {
    img: '/images/sydney/img-8.jpg',
    title: 'Breakfast',
  },
  {
    img: '/images/sydney/img-9.jpg',
    title: 'Tree',
  },
  {
    img: '/images/sydney/img-10.jpg',
    title: 'Burger',
  },
  {
    img: '/images/sydney/img-11.jpg',
    title: 'Camera',
  },
  {
    img: '/images/sydney/img-12.jpg',
    title: 'Coffee',
  },
  {
    img: '/images/sydney/img-13.jpg',
    title: 'Camping Car',
  },
  {
    img: '/images/sydney/img-14.jpg',
    title: 'Hats',
  },
  {
    img: '/images/sydney/img-15.jpg',
    title: 'Tomato basil',
  },
  {
    img: '/images/sydney/img-16.jpg',
    title: 'Mountain',
  },
  {
    img: '/images/sydney/img-17.jpg',
    title: 'Bike',
  },
  {
    img: '/images/sydney/img-18.jpg',
    title: 'Bike',
  },
  {
    img: '/images/sydney/img-19.jpg',
    title: 'Bike',
  },
  {
    img: '/images/sydney/img-20.jpg',
    title: 'Bike',
  },
];