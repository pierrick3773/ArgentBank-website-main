import { firstName } from './WelcomeUser.jsx';
let user = firstName;

export function userName() {
return (
    <p className='userName'>
        {user}
    </p>
)
}