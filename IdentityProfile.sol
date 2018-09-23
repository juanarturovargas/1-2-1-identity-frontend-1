pragma solidity ^0.4.7;

contract IdentityProfile{
    
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
        string nationality;
        string photo_identity_hash;
        string detail_identity_hash;
        string skill_list;
        string weight;
        string height;
        string ethnic_group;
        address tutor;
        address creator;
        uint registrationDate;
    }
    
    Person person;
    
    constructor() public {}
    
    //Almacenamos el creador del evento
    //event Changed(address _address);
    
    //Solo el dueño del contrato puede ejecutar el registro de la persona.
    function createIdentity(string _name, string _lastname, string _birth_place,
    uint8 _birth_year, uint8 _birth_month, uint8 _birth_day,string _nationality, 
    string _photo_identity_hash, string _detail_identity_hash,string _skill_list, 
    string _weight, string _height, string _ethnic_group ,address _tutor ) {
        //Changed(msg.sender);
        person.name=_name;
        person.lastname=_lastname;
        person.birth_place=_birth_place;
        person.birth_year=_birth_year;
        person.birth_month=_birth_month;
        person.birth_day=_birth_day;
        person.nationality=_nationality;
        person.photo_identity_hash=_photo_identity_hash;
        person.detail_identity_hash=_detail_identity_hash;
        person.skill_list=_skill_list;
        person.weight=_weight;
        person.height=_height;
        person.ethnic_group=_ethnic_group;
        person.tutor=_tutor;
        //person.creator=msg.sender;
        person.registrationDate=now;
    }
    
    function getIdentity() public returns(string, string){
        return (person.name, person.lastname);
    }
    
}