class Class2
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
	Class2 as default,
}