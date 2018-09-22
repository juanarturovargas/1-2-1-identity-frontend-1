pragma solidity ^0.4.7;

contract acta_nacimiento{
    
    /*
    constructor
    struct
    funcion para registrar a una persona
    Nombre
    Fecha de nacimiento
    Lugar de nacimiento
    Genero
    Tutores
    Tiempo en que nacio
    Direccion universal
    
    */
    
    //Dueño del contrato.
    address owner;
    
    
    struct Person{
        string name;
        string lastname;
        string birth_place;
        uint8 birth_year;
        uint8 birth_month;
        uint8 birth_day;
        address tutor;
        address universal_address;
        uint registrationDate;
    }
    
    Person person;
    
    constructor() public {
        
    }
    
    //Almacenamos el creador del evento
    event Changed(address _address);
    
    //Solo el dueño del contrato puede ejecutar el registro de la persona.
    function registerPerson(string _name, string _lastname, string _birth_place,
    uint8 _birth_year, uint8 _birth_month, uint8 _birth_day, address _uaddress) {
        //Changed(msg.sender);
        person.name=_name;
        person.lastname=_lastname;
        person.birth_place=_birth_place;
        person.birth_year=_birth_year;
        person.birth_month=_birth_month;
        person.birth_day=_birth_day;
        person.tutor=msg.sender;
        person.universal_address=_uaddress;
        person.registrationDate=now;
    }
    
    function getPerson() public returns(string, string){
        return (person.name, person.lastname);
    }
    
}