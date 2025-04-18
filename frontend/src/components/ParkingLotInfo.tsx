import { Box, Typography, Divider, Chip } from "@mui/material";
import { InfoWindow } from "@vis.gl/react-google-maps";
import { ParkingData } from "../data/parkingData";
import { permitColors } from "../data/permitData";

/**
 * Popup information of parking lot
 * @param props 
 * @returns 
 */
function ParkingLotInfo(props: 
  { lot: ParkingData, 
    headerDisabled: boolean | null | undefined
  }) 
  {
    const { lot, headerDisabled } = props;
  
    return (
      <InfoWindow 
        position={lot.position} 
        pixelOffset={[0, -40]} 
        style={{padding: '0px'}}
        headerDisabled={headerDisabled}
      >
        <Box display="flex" flexDirection="column" justifyContent="center" gap={1}>
          <Typography align="center" variant="subtitle1" sx={{ fontWeight: "bold" }}>
            {lot.name}
          </Typography>
          <Divider/>
          <Box display="flex" alignItems="flex-start" width="100%" gap={1}>
            <Typography align="left" variant="subtitle2" >Permit:</Typography>
            <Box display="flex" justifyContent="flex-start" flexWrap="wrap" alignItems="center" gap={1}>
              {lot.permits.map((permit, index) => (
                <Chip 
                  key={index}
                  label={permit} 
                  size="small" 
                  style={{
                    color: "#ffffff",
                    backgroundColor: permitColors[permit]
                  }}/>
              ))}
            </Box>
          </Box>
          <Typography align="left" variant="subtitle2">{`Charging: ${lot.hasCharging? 'Yes' : 'No'}`}</Typography>
        </Box> 
      </InfoWindow>
    )
}

export default ParkingLotInfo;