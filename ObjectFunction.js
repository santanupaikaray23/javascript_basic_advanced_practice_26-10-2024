function language(name,country){
    this.name = name;
    this.country = country;
    this.greet = function(){
        return `Say Hi to ${name}`
    }
}

var Hindi = new language('Hindi','India')