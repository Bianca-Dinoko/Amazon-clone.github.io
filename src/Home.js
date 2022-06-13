import React from "react";
import "./Home.css";
import Product from "./Product";
import Grid from '@mui/material/Grid';


function Home(props) {

    return (
        <div>
            <Grid container spacing={2}>
                <img
                    className="home-image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />
                <Grid item xs={6} >
                    <Product
                        id="125569"
                        title='The Good lie'
                        price={15.99}
                        image='https://m.media-amazon.com/images/I/41DoX73VKUL._SY346_.jpg'
                        rating={4}
                    />
                </Grid>
                <Grid item xs={6} >
                    <Product
                        id="253327"
                        title='Juicer Machine, 800W Juice Extractor with 3 Big Mouth, 3 Speed
                         Centrifugal Juicer for Whole Fruit Vegetable, Easy to Clean, Non-Slip Feet, BPA-Free'
                        price={79.99}
                        image='https://m.media-amazon.com/images/I/71C3GBIzrfL._AC_SX679_.jpg'
                        rating={4}
                    />
                </Grid>

                <Grid item xs={6} >
                    <Product
                        id="333698"
                        title='Seagate IronWolf 4TB NAS Internal Hard Drive HDD – CMR 3.5 Inch SATA 6Gb/s 
                        5900 RPM 64MB Cache for RAID Network Attached Storage – Frustration Free Packaging (ST4000VN008)'
                        price={82.99}
                        image='https://m.media-amazon.com/images/I/811hUZ6znwL._AC_SX425_.jpg'
                        rating={4}
                    />
                </Grid>

                <Grid item xs={6} >
                    <Product
                        id="427856"
                        title='RAVESOUND Bluetooth Wireless Headset, Bluetooth 5.2 Headphones, 
                        AI Noise Cancelling Mic, Bass You Can Feel, IPX7 Waterproof Earbuds, 25H Playtime, Bluetooth Wireless Earbuds for Sport'
                        price={29.98}
                        image='https://m.media-amazon.com/images/I/61kXqdDOuZL._AC_UL320_.jpg'
                        rating={5}
                    />
                </Grid>

                <Grid item xs={6} md={4}>

                    <Product
                        id="532546"
                        title='TCL 20 Pro 5G Unlocked Android Smartphone with 6.67” AMOLED FHD+ Display,
                         48MP OIS Quad Rear Camera System, 6GB+256GB, 4500mAh Battery with Wireless Charging, US 5G Version Cellphone, Marine Blue'
                        price={449.99}
                        image='https://m.media-amazon.com/images/I/81-iFZ14NGS._AC_SX679_.jpg'
                        rating={4}
                    />

                </Grid>
                <Grid item xs={6} md={4}>

                    <Product
                        id="532546"
                        title='TCL 20 Pro 5G Unlocked Android Smartphone with 6.67” AMOLED FHD+ Display,
                         48MP OIS Quad Rear Camera System, 6GB+256GB, 4500mAh Battery with Wireless Charging, US 5G Version Cellphone, Marine Blue'
                        price={449.99}
                        image='https://m.media-amazon.com/images/I/81-iFZ14NGS._AC_SX679_.jpg'
                        rating={4}
                    />

                </Grid>
                <Grid item xs={6} md={4}>

                    <Product
                        id="532546"
                        title='TCL 20 Pro 5G Unlocked Android Smartphone with 6.67” AMOLED FHD+ Display,
                         48MP OIS Quad Rear Camera System, 6GB+256GB, 4500mAh Battery with Wireless Charging, US 5G Version Cellphone, Marine Blue'
                        price={449.99}
                        image='https://m.media-amazon.com/images/I/81-iFZ14NGS._AC_SX679_.jpg'
                        rating={4}
                    />

                </Grid>
                <Grid item xs={12}>
                    <Product
                        id="697868"
                        title='LG 34WP65C-B 34-Inch 21:9 Curved UltraWide QHD (3440x1440) VA Display with sRGB 
                        99% Color Gamut and HDR 10 and 3-Side Virtually Borderless Display with Tilt/Height Adjustable Stand -Black'
                        price={472.89}
                        image='https://m.media-amazon.com/images/I/716OFWNyB4S._AC_SX679_.jpg'
                        rating={5}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;