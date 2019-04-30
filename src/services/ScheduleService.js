function ScheduleService ()
{
    this.get = function()
    {
        return fetch('/datas/schedule.js')
            .then(response => response.json())
    }
};

export default ScheduleService;