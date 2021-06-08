import React from 'react'
import HeroSection from '../HeroSection'
import {homeObjOne} from './Data'
import {homeObjTwo} from './Data'
import {homeObjThree} from './Data'
import {homeObjFour} from './Data'
import  Pricing  from "../../Pricing";

function Home() {
    return (
        <div>
            <HeroSection {...homeObjOne}/>
            <Pricing />
            <HeroSection {...homeObjTwo}/>
        </div>
    )
}

export default Home
