import React, { useState } from 'react';
import InputControl from './components/InputControl';
import ListItems from './components/ListItems';
import { debounce } from 'lodash';
import './Wrapper.css';

const Wrapper = () => {
    let [items, setItems] = useState([]);
    let debouncedFetchDataHandler = null;

    const fetchData = (url) => {
        fetch(url).then((resp) => {
            if (resp.status >= 200 && resp.status < 300) {
                return Promise.resolve(resp.json());
            }
            return Promise.reject(new Error('ERROR'));
        }).then(data => setItems([...data.message])).catch(error => setItems([]));
    };

    const fetchDataHandler = (event) => {
        event.persist();
        if (!debouncedFetchDataHandler) {
            debouncedFetchDataHandler = debounce(() => {
                if (event.target.value) {
                    const apiUrl = `https://dog.ceo/api/breed/${event.target.value.toLowerCase()}/images/random/10`;
                    fetchData(apiUrl)
                } else {
                    setItems([]);
                }
            }, 500);
        }
        debouncedFetchDataHandler();
    }

    const itemClickHandler = (itemIndex) => {
        console.log(`Clicked on ${itemIndex} item`);
    }

    return (
        <div className="wrapper">
            <InputControl changed={fetchDataHandler} itemsCount={items.length} />
            { items.length > 0 ?
                <ListItems
                    items={items}
                    onSelectItem={itemClickHandler} /> : null }
        </div>
    );
}

export default Wrapper;