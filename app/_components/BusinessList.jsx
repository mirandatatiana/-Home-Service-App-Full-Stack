import React from "react";

function BusinessList({businessLists, title}) {
  return (
        <div className="mt-5">
            <h2 className="font-bold text-[22px]"></h2>
          {businessLists.map((business, index) => (
                <div key={index}
                  >
                  {/* <Image
                    
                    alt={business.name}
                    width={35}
                    height={35}
                  />
                 */}
                </div>
              ))
           
            }
        </div>
      );
}

export default BusinessList;
