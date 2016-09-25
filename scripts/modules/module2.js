import Class2 from '../classes/Class2';

function main()
{
	const name = 'modules2';

	console.log( name );
	
	new Class2( name );
}

export {
	main as default,
}