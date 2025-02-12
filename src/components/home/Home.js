import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.jpg';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import {Box, Stack} from "@mui/material";
import {info} from "../../info/Info";

export default function Home() {

   return (
      <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'} justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
         <Box className={classNames(Style.avatar, Style.shadowed)} alt={'Profile Picture'} style={{background: info.gradient}} component={'img'} src={me} 
            width={{xs: '30vh', md: '40vh'}} height={{xs: '30vh', md: '40vh'}}
              borderRadius={'50%'} p={'0.75rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
         <br/>
         <Box>
            <h1>
               {/* <span style={{background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{info.lastName}</span>
                */}
               <span>"Hey &nbsp;</span><span className={Style.hand}>🤚</span> 
            </h1>
            <h2> <span> {info.firstName} here, "</span></h2>
            <br />
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} 
            width={{xs: '35vh', md: '40vh'}}>
               <p>{info.description}</p>
            </Box>
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} 
            width={{xs: '35vh', md: '40vh'}}>
               <p>{info.quote}</p>
            </Box>
            <br/>
            <Stack spacing={2}>
               {info.miniBio.map((bio, index) => (
                  <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} link={bio.tiny} id={bio.id}/>
               ))}
            </Stack>
            <br/><br/>
            {/* <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{xs: '2rem', md: '2.5rem'}}>
               {info.socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
               ))}
            </Box> */}
         </Box>
      </Box>
   )
}