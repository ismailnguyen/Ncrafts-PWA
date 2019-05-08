function SpeakersService ()
{
    const localStorageKey = 'speakers';
    const apiEndpoint = '//ncrafts.io/datas/speakers.js';

    this.fetch = function()
    {
        fetch(apiEndpoint,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                method: 'GET',
                mode: 'cors',
            }
            )
            .then(response => response.json())
            .then(schedule => localStorage.setItem(localStorageKey, JSON.stringify(schedule)))
    }

    this.get = function () {
        return JSON.parse(localStorage.getItem(localStorageKey)) || [];
    }
};

export default SpeakersService;