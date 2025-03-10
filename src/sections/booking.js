import './booking.scss';

const template = `
    <section class="booking-container">
        <form class="booking-form">
            <h3>Book a Table</h3>
            <div class="form-row">
                <input type="text" name="first_name" placeholder="First Name" required>
                <input type="text" name="second_name" placeholder="Second Name" required>
            </div>
            <div class="form-row">
                <input type="email" name="email" placeholder="Email" required>
                <input type="tel" name="phone" placeholder="Phone" required>
            </div>
            <div class="form-row">
                <input type="date" name="booking_date" required>
                <input type="number" name="people_count" placeholder="How Many People?" required>
            </div>
            <div class="form-row full-width">
                <textarea name="additional_info" placeholder="Additional Info"></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    </section>
`;

export default template;
