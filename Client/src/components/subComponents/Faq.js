

const Faq = () => {
  return (
<section className="text-gray-600 pt-24 pb-8 md:py-24 body-font md:relative md:top-24 container md:mb-5">
    <div className="my-5">
    <h2 className="flex justify-center title-font font-semibold text-3xl">
    Frequently Asked Questions</h2>
    </div>
    <div className="join join-vertical w-screen">
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    How long after I submit my application will I be approved?
    </div>
    <div className="collapse-content"> 
        <p>
        We appreciate your interest in LWBC, and we welcome all applicants. Currently, there is a waiting list, and approval depends on membership renewals from current members. 
        </p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    Is a boat slip guaranteed with a membership?
    </div>
    <div className="collapse-content"> 
      <p>
      No. Regrettably, we cannot guarantee a boat slip upon joining. Presently, all slips are occupied, and in the event of availability, seniority will be given priority.
    </p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    Who can I bring to the club?
    </div>
    <div className="collapse-content"> 
      <p>
      As long as a member is present, you can bring family & friends. 
      </p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    Are dogs allowed?
    </div>
    <div className="collapse-content"> 
      <p>
      Certainly. While in-season, we kindly request members to leash their dogs at all times. Dogs are not permitted in the swimming area, on the beach, or inside the clubhouse. Please ensure to pick up after your dog. Given the bustling weekends with many children, we recommend leaving pets at home unless they are moving from the parking lot to your boat.
      </p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    Do we need permission to hold an event at the club? 
    </div>
    <div className="collapse-content"> 
      <p>
      Yes. For any event requests, please reach out to Mark O'Donnell.
      </p>
    </div>
  </div>
</div>
</section>
  )
}

export default Faq