import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'
import FourthComponent from './FourthComponent'
import {FifthComponent} from './FourthComponent'

const person = {
	name : "Ranga",
	address : {
		 line1: 'Baker Street',
        city: 'London',
        country: 'UK',
	},
	profiles: ['twitter', 'linkedin', 'instagram'],
	printProfiles : () => {
		person.profiles.map((profile) => console.log(profile))
	}

}

export default function LearningComponent() {
	return (
		<>
			<FirstComponent />
			<SecondComponent />
			<ThirdComponent></ThirdComponent>
			<FourthComponent></FourthComponent>
			<FifthComponent />
			<div>{person.name}</div>
			<div>{person.address.line1}</div>
			<div>{person.address.city}</div>
			<div>{person.address.country}</div>
			<div>{person.profiles[0]}</div>
			<div>{person.printProfiles()}</div>
	  	</>
	);
}
