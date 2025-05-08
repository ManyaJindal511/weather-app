import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){
    let img_url="https://media.istockphoto.com/id/873551900/photo/smog-over-noida-delhi-gurgaon-in-the-morning.webp?a=1&b=1&s=612x612&w=0&k=20&c=mrgPETo8F4ORAhvx4g-28w4KE5YUDjNUSh1aC23eQZY="

    const HOT_URL="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    const RAIN_URL="https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"

    return(
        <div className="InfoBox">
            <div className='Box'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity>70 ? RAIN_URL: info.temp>15 ? HOT_URL : COLD_URL}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}&nbsp;{info.humidity>80 ? <ThunderstormIcon/>: info.temp>15 ? <SunnyIcon/> : <AcUnitIcon/>}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>Temperature- {info.temp}&deg;C</p>
                        <p>Max Temperature- {info.tempMax}&deg;C</p>
                        <p>Min Temperature- {info.tempMin}&deg;C</p>
                        <p>Humidity- {info.humidity}</p>
                        <p>The weather can be described as {info.weather} and feels like {info.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
                </Card>
                </div>
        </div>
    )
}