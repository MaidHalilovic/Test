//map

//kreiraj funkciju koja prima niz reci vraca novi niz koji ima na svakoj rec dodat prefiks super
//primer [heroj,auto,pas]->superheroj,superauto,superpas

const AddSuper = ["heroj","auto","pas"];

const Super = AddSuper.map((el) => "super" + el)
console.log(Super)
/////////////////////////////////////////

//cena sa popustom nov niz sa 20% popusta
//primer [100,200,300]->[60,160,260]

const Popust = [100,200,300] 
const nekiPopust = Popust.map((el) => el )
console.log(nekiPopust)
//////////////////////////////////////////////

//dupliraj elemente
//primer [1,2,3]->

const Dupliratielemente = [1,2,3]
const nekiElementi = Dupliratielemente.map((el) => el * 2)
console.log(nekiElementi);
///////////////////////////////////////////////////////

//filter

///1.zadatak///////////////////////////////////////////////
//brojevi veci od 10
//primer [5,12,18,7,9]->[12,10]

const veciodDeset = [5,12,18,7,9]

const VeciBrojevi = veciodDeset.filter((el) => el > 10)
console.log(VeciBrojevi)

///2.zadatak///////////////////////////////////////////////////////
//reci koji pocinju sa slovom a
//primer [apple,banana,apricot,cherry,]

const SlovoA = ["apple","banana","apricot","cherry"]

const PocinjeSaSlovomA = SlovoA.filter((el) => el[0] === 'a')
console.log(PocinjeSaSlovomA);

///3.zadatak///////////////////////////////////////////////////

//neparni brojevi


const Neparni = [1,2,3,4,5,6,7,8,9];

const neparniBrojevi = Neparni.filter((el) => el % 3 === 0)
console.log(neparniBrojevi);

///1.zadatak/////////////////////////////////////////////////////////
//reduce
//primer [1,2,3,4,5]-> 15

const zbir = [1,2,3,4,5];

const zbirBr = zbir.reduce((prev,curr)=> prev + curr)
console.log(zbirBr);
///2.zadatak/////////////////////////////////////////////////////////////
//proizvod brojeva----primer [1,2,3,4]->24

const proizvod = [1,2,3,4,5];

const proizvodBrojeva = proizvod.reduce((prev,curr) => prev * curr)
console.log(proizvodBrojeva)

///3.zadatak///////////////////////////////////////////////////////////////

//kreiraj funkciju koja prima niz reci i vraca jednu recenicu  sastavljenu  od tih reci razdvojenih razmakom
//primer[hello,world,this,is,javascript]

const razdvojeneReci = ["hello","world","this","is","javascript"]

const razdvojene = razdvojeneReci.reduce((prev,curr)=> prev + ' '+curr)
console.log(razdvojene)
////////////////////////////////////////////////////////////////////////