function SpeakersService ()
{
    const localStorageKey = 'speakers';
    const apiEndpoint = '//raw.githubusercontent.com/ncraftsconf/newcrafts19/master/datas/speakers.js';

    this.fetch = function()
    {
        fetch(apiEndpoint)
            .then(response => response.json())
            .then(datas => localStorage.setItem(localStorageKey, JSON.stringify(datas.speakers)))
    }

    this.get = function () {
        return JSON.parse(localStorage.getItem(localStorageKey)) || [];
    }
};

export default SpeakersService;