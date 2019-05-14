function ScheduleService ()
{
    const localStorageKey = 'schedule';
    const apiEndpoint = '//raw.githubusercontent.com/ncraftsconf/newcrafts19/master/datas/schedule.js';

    this.fetch = function()
    {
        return fetch(apiEndpoint)
            .then(response => response.json())
            .then(schedule => {
                localStorage.setItem(localStorageKey, JSON.stringify(schedule));

                return schedule;
            })
    }

    this.get = function () {
        return JSON.parse(localStorage.getItem(localStorageKey)) || [];
    }
};

export default ScheduleService;