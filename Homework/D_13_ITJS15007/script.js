let day =
{
    date: `2022/12/22`,
    rain: true,
    sun: true,
    cloudy: false,
    temp: [25, 35, 24],


// Zadatak 1
//Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Metod vraća true ukoliko je dan bio tropski, u suprotnom vraća false.
    tropicalDay: function()
    {
        for(let i = 0; i < this.temp.length; i++)
        {
            if(this.temp[i] < 24)
            {
                return false;
            }
        }
        return true;
    },


// Zadatak 2
// Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. Metod vraća true ukoliko je dan bio nepovoljan, u suprotnom vraća false.
    unpleasantDay: function()
    {
        for(let i = 1; i < this.temp.length; i++)
        {
            if((this.temp[i] - this.temp[i - 1]) > 8 || (this.temp[i - 1] - this.temp[i]) > 8)
            {
                return true;
            }
        }
        return false;
    },


// Zadatak 3
// Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Metod vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.
    strangeDay: function()
    {
        for(let i = 0; i < this.temp.length; i++)
        {
            if((day.rain == true && day.temp[i] == -5) || (day.cloudy == true && day.temp[i] >= 25) || (day.rain == true && day.cloudy == true && day.sun == true))
            {
                return true;
            }
        }
        return false;
    }
}

console.log(day.tropicalDay());
console.log(day.unpleasantDay());
console.log(day.strangeDay());