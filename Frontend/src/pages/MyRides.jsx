import { useEffect, useState } from "react";
import Navbar from "../components/Navbar"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function MyRides() {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState(0);
  const [allRides,setAllRides] = useState([]);
  const [takenRides,setTakenRides] = useState([]);
  const [offeredRides,setOfferedRides] = useState([]);


  useEffect(() => {
    setIsLoading(true);
    
    setIsLoading(false);
  }, [])
  if (isLoading) {
    return <p>Loading...</p>
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Navbar />
      <div className="px-3">
        <div className="font-semibold text-3xl">My Rides</div>
        <div>
          <div className="w-[100%]">
            <div className="border-b-2">
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Upcoming Rides" {...a11yProps(0)} />
                <Tab label="Passenger Requests " {...a11yProps(1)} />
                <Tab label="Completed Rides" {...a11yProps(2)} />
              </Tabs>
            </div>
              {isLoading?(<p>Loading...</p>):
              (<div>
                <CustomTabPanel value={value} index={0}>
                  Hello this will show my upcoming rides 
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  Heelo this will show my passenger requests 
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                  Hello this will show my Completed Rides 
                </CustomTabPanel>
              </div>)}
          </div>
        </div>
      </div>
    </div>
  );

}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {children}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

// export default function BasicTabs() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//           <Tab label="Item One" {...a11yProps(0)} />
//           <Tab label="Item Two" {...a11yProps(1)} />
//           <Tab label="Item Three" {...a11yProps(2)} />
//         </Tabs>
//       </Box>
//       <CustomTabPanel value={value} index={0}>
//         Item One
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={1}>
//         Item Two
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={2}>
//         Item Three
//       </CustomTabPanel>
//     </Box>
//   );
// }
