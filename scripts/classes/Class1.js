class Class1
{
	constructor( name )
	{
		this.name = name;
		
		this.showName();
	}
	
	showName()
	{
		console.log( this.name );
	}
}

export {
	Class1 as default,
}
