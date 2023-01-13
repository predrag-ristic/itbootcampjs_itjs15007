class Film
{
    constructor(naslov, reziser, godinaIzdanja)
    {
        this.naslov = naslov;
        this.reziser = reziser;
        this.godinaIzdanja = godinaIzdanja;
    }

    stampaj()
    {
        console.log(`Naslov filma je ${this._naslov}.`);
    }

    set naslov(n)
    {
        if(n.length > 0)
        {
            this._naslov = n;
        }
        else
        {
            this._naslov = `N/A`;
        }
    }

    set reziser(r)
    {
        if(r.length > 0)
        {
            this._reziser = r;
        }
        else
        {
            this._reziser = `N/A`;
        }
    }

    set godinaIzdanja(gi)
    {
        if(gi > 1800)
        {
            this._godinaIzdanja = gi;
        }
        else
        {
            this._godinaIzdanja = 1800;
        }
    }

    get naslov()
    {
        return this._naslov;
    }

    get reziser()
    {
        return this._reziser;
    }

    get godinaIzdanja()
    {
        return this._godinaIzdanja;
    }
}

export { Film };