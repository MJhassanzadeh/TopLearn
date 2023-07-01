import React, {useEffect, useState} from 'react';
import {Box, Grid, Typography,} from "@mui/material";
import logo from "../reactapp/assets/img/logo.svg";
import daneshjo from "../reactapp/assets/img/dan.svg";
import modares from "../reactapp/assets/img/maf.svg";
import amozesh from "../reactapp/assets/img/am.svg";
import styles from "../reactapp/styles/AppStyles.module.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import star from "../reactapp/assets/img/goldVip.png"
import Listul from "../reactapp/components/list.js";
import store from "../reactapp/redux/store";
import Image from 'next/legacy/image';
const custoum = createTheme({
  palette: {primary: {main: "#fff"}, secondary: {main: "#000"},}
})

import { Inter } from 'next/font/google'
import {Provider} from "react-redux";
import axios from "axios";
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  const [cars , setData] = useState([]);
  useEffect(()=>{
    axios.get("https://myfakeapi.com/api/cars")
        .then(res=>{
          setData(res.data.cars.slice(0 , 4))
        })
  },[])

  return (
    <div className={styles.body}>
      {/*<head>*/}
      {/*  <title>Hello world</title>*/}
      {/*</head>*/}
      <Provider store={store}>
        <ThemeProvider theme={custoum}>
          <Grid className={styles.img} container columns={14} sx={{pt: 5}}>
            <Grid item xs={2}/>
            <Grid item xs={10}>
              <div className={styles.header}>
                <div>
                  <div  className={styles.logo} alt="logo" ></div>
                </div>
                <ul className={styles.listul}>
                  <Listul name="آخرین دوره ما"></Listul>
                  <Listul name=" تخفیفات روزانه"></Listul>
                  <Listul name="بلاگ"></Listul>
                  <Listul name="فرصت های شغلی"></Listul>
                  <Listul name="همکاری باما"></Listul>
                  <Listul name="لینک های مفید"></Listul>
                  <Listul name="تماس باما"></Listul>
                </ul>
              </div>
              <div className={styles.wapper}>
                <div className={styles.wh}>
                  <Typography className={styles.fontFamily} sx={{fontSize:"35px",}} variant="h2" color="primary">خود آموزی کسب تجربه ورود به بازار کار با تاپ لرن</Typography>
                </div>
                <br />
                <div className={styles.wh}>
                  <Typography className={styles.fontFamily} sx={{fontSize:"30px",}} variant="body1" color="primary">با کمترین هزینه خودت حرفه ای یاد بگیر</Typography>
                </div>
                <form className={styles.formheader}>
                  <input placeholder=" چی میخوای یاد بگیری ؟ " autocomplete="off" name="Search"/>
                  <button></button>
                </form>
                <Box className={styles.imgheader}>
                  <div className={styles.imgcom}>
                    <div>
                      {/*{*/}
                      {/*  // cars.map((car , index) =>(*/}
                      {/*  //     <ul key={car.id} className={styles.listtb}>*/}
                      {/*  //       <li>*/}
                      {/*  //         <Image className={styles.imghead} src={amozesh} alt="amozesh" />*/}
                      {/*  //       </li>*/}
                      {/*  //       <li>*/}
                      {/*  //         <Typography className={styles.fontFamily} sx={{fontSize:"16px",}} variant="h2" color="primary">380,007</Typography>*/}
                      {/*  //       </li>*/}
                      {/*  //       <li>*/}
                      {/*  //         <Typography className={styles.fontFamily} sx={{fontSize:"16px",}} variant="h2" color="primary">دقیقه آموزش</Typography>*/}
                      {/*  //       </li>*/}
                      {/*  //     </ul>*/}
                      {/*  ))*/}
                      {/*}*/}

                      <ul className={styles.listtb}>
                        <li>
                          <Image className={styles.imghead} src={amozesh} alt="amozesh" />
                        </li>
                        <li>
                          <Typography className={styles.fontFamily} sx={{fontSize:"16px",}} variant="h2" color="primary">380,007</Typography>
                        </li>
                        <li>
                          <Typography className={styles.fontFamily} sx={{fontSize:"16px",}} variant="h2" color="primary">دقیقه آموزش</Typography>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className={styles.listtb}>
                        <li>
                          <Image className={styles.imghead} src={modares} alt="modares" />
                        </li>
                        <li>
                          <Typography className={styles.fontFamily} sx={{fontSize:"16px",}} variant="h2" color="primary">151</Typography>
                        </li>
                        <li>
                          <Typography className={styles.fontFamily} sx={{fontSize:"16px",}} variant="h2" color="primary">مدرس مجرب</Typography>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className={styles.listtb}>
                        <li>
                          <Image className={styles.imghead} src={daneshjo} alt="daneshjo" />
                        </li>
                        <li>
                          <Typography className={styles.fontFamily} sx={{fontSize:"16px",}} variant="h2" color="primary">421,651</Typography>
                        </li>
                        <li>
                          <Typography className={styles.fontFamily} sx={{fontSize:"16px",}} variant="h2" color="primary">نفر دانشجو</Typography>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Box>
              </div>
              <Box className={styles.menutwo}>
                <div className={styles.divtwo}>
                  <Typography className={styles.fontFamily} sx={{fontSize:"16px",}} variant="h2" color="secondary">برنامه نویسی و طراحی وب</Typography>
                </div>
                <div className={styles.divtwo}>
                  <Typography className={styles.fontFamily} sx={{fontSize:"16px",}} variant="h2" color="secondary">آموزش برنامه نویسی به کودکان</Typography>
                </div>
                <div className={styles.divtwo}>
                  <Typography className={styles.fontFamily} sx={{fontSize:"16px",}} variant="h2" color="secondary">آموزش ورود به دنیای برنامه نویسی</Typography>
                </div>
                <div className={styles.divtwo}>
                  <Typography className={styles.fontFamily} sx={{fontSize:"16px",}} variant="h2" color="secondary">دوران مخصوص ناشنوایان</Typography>
                </div>
                <div>
                </div>
                <div className={styles}>
                  <Image
                      src={star} className={styles.star}
                      width={'40px'}
                      height={'40px'}
                  />
                </div>
              </Box>
            </Grid>
            <Grid item xs={2}/>
          </Grid>
        </ThemeProvider>
      </Provider>
    </div>
  )
}
