
import { useLoaderData } from 'react-router-dom';
const UserCart = () => {
    const user = useLoaderData();
    return (
        <div>
            <h2>
                This is a fixed user cart {user._id}
            </h2>
        </div>
    );
};

export default UserCart;