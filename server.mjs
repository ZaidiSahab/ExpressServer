import express from 'express'
import cors from 'cors'
import path from 'path'
const app = express()
const __dirname = path.resolve();
// app.use(cors())




app.get('/profile', (req, res) => {
    console.log('This is Profile Page!', new Date())
    res.send('Profile Page\n' + new Date())

})

app.get('/weather/:cityName', (req, res) => {
    console.log('This is Profile Page!', new Date())

    let weatherData = {
        karachi: {
            city: "Karachi",
            humidity: 44,
            tempInC: 30,
            high: 32,
            low: 14
        },
        london: {
            city: "london",
            humidity: 44,
            tempInC: 30,
            high: 32,
            low: 14
        }
    }

    let userInputCityName = req.params.cityName.toLowerCase();
    let weatherDataToSend = weatherData[userInputCityName]

    if (weatherDataToSend) {
        res.send(weatherDataToSend)
    }
    else{
        res.status(404).send(`weather data is not available for ${req.params.cityName}`
        );

    }


    res.send()
})

app.use('/', express.static(path.join(__dirname, 'public')))



const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})