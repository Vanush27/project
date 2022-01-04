import React, {useState} from 'react';

const LocalStr = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [attachedTo, setAttachedTo] = useState('');


    const [error, setError] = useState(false);

    const handle = () => {

        if (title && description && attachedTo) {
            console.log(title, description, attachedTo)
            setError(false)
            const getLocalStorage = localStorage.getItem('data')
            const newItem =
                {
                    id: Math.random(),
                    title: title,
                    description: description,
                    status: "Done",
                    attachedTo: attachedTo
                }

            if (getLocalStorage && getLocalStorage.length > 0) {
                const newTest = [...JSON.parse(getLocalStorage), newItem]
                localStorage.setItem("data", JSON.stringify(newTest));
            } else {
                localStorage.setItem("data", JSON.stringify([newItem]));
            }
        } else {
            setError(true)
        }


    };

    return (
        <div>

            <input
                placeholder="Title"
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value)

                }
                }
            />
            <input
                placeholder="description"
                value={description}
                onChange={(e) => {
                    setDescription(e.target.value)
                }
                }
            />
             <input
                placeholder="attachedTo"
                value={attachedTo}
                onChange={(e) => {
                    setAttachedTo(e.target.value)
                }
                }
            />

            {error && 'Name is required!'}
            <div>
                <button onClick={handle}>Done</button>
            </div>

        </div>
    );
};
// export default LocalStr;