const datafetch = () => {
fetch("https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f")
.then((response) => { 
console.log(response)
if (!response.ok) {
if (response.status === 400) {
throw new Error("Bad Request");
}
if (response.status === 401) {
    throw new Error("Unauthorized");
}
if (response.status === 403) {
    throw new Error("Forbidden");
}
throw new Error("Generic Fetching Error");
}
return response.json();
}
)
.then((data) => {
    console.log("Fetched Data: ", data);
})
.catch((error) => {
    console.error("Error During Fetch: ", error);
})
}
datafetch();

class Vestito {
    prezzoivaesclusa: number;
    prezzoivainclusa: number;
    saldo: number;
    constructor (_prezzoivaesclusa: number, _prezzoivainclusa: number, _saldo: number) {
        this.prezzoivaesclusa = _prezzoivaesclusa;
        this.prezzoivainclusa = _prezzoivainclusa;
        this.saldo = _saldo;
    }

    getsaldocapo() : number {
        return (this.prezzoivaesclusa * this.saldo) / 100; //8.32
    };
    getacquistocapo() : number {
        return this.prezzoivainclusa - this.getsaldocapo();
    };
};

let vestito1 = new Vestito (18.5, 22.57, 45)
console.log(`Totale: ${vestito1.getacquistocapo()}`)
