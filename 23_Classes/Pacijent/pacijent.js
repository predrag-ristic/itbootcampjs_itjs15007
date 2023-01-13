class Pacijent
{
    constructor(ime, visina, tezina)
    {
        this.ime = ime;
        this.visina = visina;
        this.tezina = tezina;
    }

    get ime()
    {
        return this._ime;
    }

    set ime(i)
    {
        if(i.length > 0)
        {
            this._ime = i;
        }
        else
        {
            this._ime = `N/A`;
        }
    }

    get visina()
    {
        return this._visina;
    }

    set visina(v)
    {
        if(v > 0 && v < 250)
        {
            this._visina = v;
        }
        else
        {
            this._visina = `N/A`;
        }
    }

    get tezina()
    {
        return this._tezina;
    }
    
    set tezina(t)
    {
        if(t > 0 && t < 550)
        {
            this._tezina = t;
        }
        else
        {
            this._tezina = `Error`;
        }
    }

    stampaj()
    {
        console.log(`Osoba ${this.ime} je ${this.visina}cm visoka i ${this.tezina}kg teska. Na osnovu toga se zakljucuje da je BMI pacijenta ${this.bmi()}`);
        console.log(this);
    }

    stampajListu()
    {
        let htmlLista = 
        `
        <ul>
            <li>Ime: ${this.ime}</li>
            <li>Visina: ${this.visina}</li>
            <li>Tezina: ${this.tezina}</li>
        </ul>
        `;
        return htmlLista;
    }

    bmi()
    {
        let bodyMassIndex = this.tezina / ((this.visina / 100) ** 2);
        return bodyMassIndex;
    }

    kritican()
    {
        if(this.bmi() < 15 || this.bmi() > 40 )
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}

export default Pacijent;