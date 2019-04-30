<template>
    <div>
        <div class="modal-content">
            <h4>Give your feedback</h4>
            
            <div class="input-field col s6">
                <label for="name_input">Your name</label>
                <input id="name_input" type="text" autofocus />
            </div>
            <div class="input-field col s6">
                <label for="feedback_input">Your feedback</label>
                <textarea id="feedback_input" class="materialize-textarea"></textarea>
            </div>
        </div>

        <div class="modal-footer">
            <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Cancel</a>
            <a href="#!" class="modal-action modal-close btn waves-effect waves-light">Send</a>
        </div>
    </div>
</template>
