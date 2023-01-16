export class Boja
{
    constructor(talasna_duzina, zasicenje, intenzitet)
    {
        this.talasna_duzina = talasna_duzina;
        this.zasicenje = zasicenje;
        this.intenzitet = intenzitet;
    }

    get talasna_duzina()
    {
        return this._talasna_duzina;
    }
    set talasna_duzina(td)
    {
        if(td > 0)
        {
            return this._talasna_duzina = td;
        }
        else
        {
            return this._talasna_duzina = `N/A`
        }
    }
    
    get zasicenje()
    {
        return this._zasicenje;
    }
    set zasicenje(z)
    {
        if(z > 0)
        {
            return this._zasicenje = z;
        }
        else
        {
            return this._zasicenje = `N/A`
        }
    }
    
    get intenzitet()
    {
        return this._intenzitet;
    }
    set intenzitet(i)
    {
        if(i > 0)
        {
            return this._intenzitet = i;
        }
        else
        {
            return this._intenzitet = `N/A`
        }
    }
}