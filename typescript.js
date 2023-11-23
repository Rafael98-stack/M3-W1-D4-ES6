var datafetch = function () {
    fetch("https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f")
        .then(function (response) {
        console.log(response);
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
    })
        .then(function (data) {
        console.log("Fetched Data: ", data);
    })
        .catch(function (error) {
        console.error("Error During Fetch: ", error);
    });
};
datafetch();
var Vestito = /** @class */ (function () {
    function Vestito(_prezzoivaesclusa, _prezzoivainclusa, _saldo) {
        this.prezzoivaesclusa = _prezzoivaesclusa;
        this.prezzoivainclusa = _prezzoivainclusa;
        this.saldo = _saldo;
    }
    Vestito.prototype.getsaldocapo = function () {
        return (this.prezzoivaesclusa * this.saldo) / 100;
    };
    ;
    Vestito.prototype.getacquistocapo = function () {
        return this.prezzoivainclusa - this.getsaldocapo();
    };
    ;
    return Vestito;
}());
;
var vestito1 = new Vestito(18.5, 22.57, 45);
console.log("Totale: ".concat(vestito1.getacquistocapo()));
