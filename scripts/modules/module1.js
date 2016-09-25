import Class1 from '../classes/Class1';

function main()
{
	const name = 'modules1';
	
	console.log( name );
	
	new Class1( name );
}

export {
	main as default,
}
