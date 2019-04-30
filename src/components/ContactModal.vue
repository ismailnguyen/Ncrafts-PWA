<template>
    <div>
        <div class="modal-content">
            <h4>Contact us</h4>
            
            <div class="input-field col s6">
                <label for="name_input">Your name</label>
                <input id="name_input" type="text" autofocus />
            </div>
            
            <div class="input-field col s6">
                <label for="email_input">Your e-mail address</label>
                <input id="email_input" type="email"/>
            </div>

            <div class="input-field col s6">
                <label for="message_input">Message</label>
                <textarea id="message_input" class="materialize-textarea"></textarea>
            </div>
        </div>

        <div class="modal-footer">
            <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Cancel</a>
            <a href="#!" class="modal-action modal-close btn waves-effect waves-light">Send</a>
        </div>
    </div>
</template>
