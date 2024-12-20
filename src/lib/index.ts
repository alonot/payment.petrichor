// place files you want to import through the `$lib` alias in this folder.
// const backend_url = 'http://127.0.0.1:8000/'
// const backend_url = 'https://petri-back.vercel.app/'
const backend_url = 'https://petrichor-backend.vercel.app/'

export const frontend_url = 'https://petrichor.events/'
export const payment_url = 'https://payment.petrichor.events/'

export const API = {
    events_apply_paid: backend_url + 'api/auth/events/apply/paid/',
    events_apply_free: backend_url + 'api/auth/events/apply/free/',
    whoami: backend_url + "api/auth/",
}
