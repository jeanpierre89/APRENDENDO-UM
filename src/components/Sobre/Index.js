import React from "react";
import { TitEx } from './Styled';
import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import Divider from '@mui/joy/Divider';



function Index() {

        const content = (
          <Box sx={{ fontSize: 'sm', color: 'text.tertiary' }}>
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
         Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
         Sed malesuada lobortis pretium.`}
          </Box>
          
        );

        const contentD = (
            <Box sx={{ fontSize: 'sm', color: 'text.tertiary' }}>
              {`
              Aqui eu posso descrever minhas princinpais habilidades que eu desenvolvi com o decorrer
              dos anos assim como meus pontos fortes e fracos .`}
            </Box>
            
          );

    return(
        <TitEx>
            <h1>Sobre Jean Pierre</h1>
                <Stack spacing={2} direction="row">
                {content}
                <Divider orientation="vertical"></Divider>
                {contentD}
                </Stack>
            
    </TitEx>
      
        
    )
}

export default Index