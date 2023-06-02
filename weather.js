class Weather {

    constructor(){
        this.api = '754488369154e87302c26acf560ba9b9';
    }

    async getWeather (location , country) {
        let fetchcall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location},${country}&APPID=${this.api}`);
        let fetchreturn = await fetchcall.json();

        if(this.status == 404) {
            console.log(404);
            return 404;
        }

        return fetchreturn;
    }

}