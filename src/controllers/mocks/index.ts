
export class Mocks {
    public static DATA = {
        query: (queryObject) => {

            return [{ Name: 'Main', user_id: '5c47344a252997227cc054c6', _id: '5c707887983e667a0c725143' }];
        },
        search: (queryObject) => {

            return [{ Name: 'Main', user_id: '5c47344a252997227cc054c6', _id: '5c707887983e667a0c725143' }];
        },

    };

    public static AUTH = {
        token: () => {
            return {
                user: { _id: '5c47344a252997227cc054c6', Email: 'roi.benhaim1@gmail.com' },
                token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzQ3MzQ0YTI1Mjk5NzIyN2NjMDU0YzYiLCJFbWFpbCI6InJvaS5iZW5oYWltMUBnbWFpbC5jb20iLCJQYXNzd29yZCI6IjEyMzQ1NiIsImlhdCI6MTU1MDg3MzUzMywiZXhwIjoxNTUwOTE2NzMzLCJhdWQiOiJodHRwczovL3NpZ25uYXR1cmUuaGVyb2t1YXBwcy5jb20iLCJpc3MiOiJTaWduTmF0dXJlIGluYy4iLCJzdWIiOiJpbmZvQHNpZ25uYXR1cmUuY29tIn0.YAtD2UqzwYa3z1Tp6xxi_shsPDgI8oSGrbOOqCz8htTFdi6A6TswDUcYLG4OS8u2KX2iQhDATUMkKvvYNQNGeD1Ar3fD5L9x6oon9oxr5ZFWjX5VnC4-cEsSvcwQIUY-dtzwNLBdeNyvP2Qc7PDokbw4jEJERu5nUTt0YCK7AhzU6NZBa4rfsAsramuLJ6oe8QpoGcpXWAmXWiMUargM90h1Xz_Twlqk-vHlSkVXMicrgLSVQuwbfPNzzC7PqxqlUYyk4sJi459d4S6_tgponCg300oGGj0NL80Y4jY1psINM3WAR8WI3G1t8yNcli7X-DjSCmT5U0oqdyyVTAzFng',
            };
        },
        signup: () => {
            return {};
        },
        verify: () => {
            return true;
        },

    };
}
