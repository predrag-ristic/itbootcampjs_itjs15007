export class Knjiga
{
    constructor(naslov, autor, godIzdanja, brojStrana, cena)
    {
        this.naslov = naslov;
        this.autor = autor;
        this.godIzdanja = godIzdanja;
        this.brojStrana = brojStrana;
        this.cena = cena;
    };

    get naslov()
    {
        return this._naslov;
    };
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
    };
    
    get autor()
    {
        return this._autor;
    }
    set autor(a)
    {
        if(a.length > 0)
        {
            this._autor = a;
        }
        else
        {
            this._autor = `N/A`;
        }
    };

    get godIzdanja()
    {
        return this._godIzdanja;
    }
    set godIzdanja(g)
    {
        if(g > 0)
        {
            this._godIzdanja = g;
        }
        else
        {
            this._godIzdanja = `N/A`;
        }
    };

    get brojStrana()
    {
        return this._brojStrana;
    }
    set brojStrana(s)
    {
        if(s > 0)
        {
            this._brojStrana = s;
        }
        else
        {
            this._brojStrana = `N/A`;
        }
    };

    get cena()
    {
        return this._cena;
    }
    set cena(c)
    {
        if(c > 0)
        {
            this._cena = c;
        }
        else
        {
            this._cena = `N/A`;
        }
    };

    stampaj()
    {
        let htmlLista = 
        `
        <ul>
            <li>Naslov: ${this.naslov}</li>
            <li>Autor: ${this.autor}</li>
            <li>Godina izdanja: ${this.godIzdanja}</li>
            <li>Broj strana: ${this.brojStrana}</li>
            <li>Cena: ${this.cena}</li>
        </ul>
        `;
        return htmlLista;
    };

    obimna()
    {
        if(this.brojStrana > 600)
        {
            return true
        }
        else
        {
            return false
        }
    };

    skupa()
    {
        if(this.cena > 8000)
        {
            return true
        }
        else
        {
            return false
        }
    };

    dugackoIme()
    {
        if(this.autor.length > 18)
        {
            return true
        }
        else
        {
            return false
        };
    };
};