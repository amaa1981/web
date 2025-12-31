export default function Products() {
  return (
    <section className="bg-white py-24 sm:py-32" id="products">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-balance text-gray-900 sm:text-5xl">
              Our Products
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              We are experts in the industry-leading open-source and enterprise
              technologies that drive business transformation for our clients in
              Saudi Arabia.
            </p>
          </div>
        </div>

        {/* Logo cloud grid */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-2 lg:px-1">
            <div className="-mx-6 grid grid-cols-1 gap-1 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
              <div className="bg-gray-400/10 p-6 sm:p-10">
                <img
                  alt="Red Hat OpenShift logo"
                  src="/images/openshift-logo.svg"
                  width={158}
                  height={48}
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                />
              </div>
              <div className="bg-gray-400/10 p-6 sm:p-10">
                <img
                  alt="Red Hat OpenShift AI logo"
                  src="/images/openshift-ai-logo.svg"
                  width={158}
                  height={48}
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                />
              </div>
              <div className="bg-gray-400/10 p-6 sm:p-10">
                <img
                  alt="Red Hat Ansible Automation Platform logo"
                  src="/images/ansible-logo.svg"
                  width={158}
                  height={48}
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                />
              </div>
              <div className="bg-gray-400/10 p-6 sm:p-10">
                <img
                  alt="Red Hat Enterprise Linux logo"
                  src="/images/enterpriselinux-logo.svg.svg"
                  width={158}
                  height={48}
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                />
              </div>
              <div className="bg-gray-400/10 p-6 sm:p-10">
                <img
                  alt="VMware logo"
                  src="/images/vmwaren-logo.svg"
                  width={158}
                  height={48}
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                />
              </div>
              <div className="bg-gray-400/10 p-6 sm:p-10">
                <img
                  alt="MongoDB logo"
                  src="/images/mongodb-logo.svg"
                  width={158}
                  height={48}
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                />
              </div>
              <div className="bg-gray-400/10 p-6 sm:p-10">
                <img
                  alt="GitLab logo"
                  src="/images/gitlab-logo.svg.svg"
                  width={158}
                  height={48}
                  className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                />
              </div>
              <div className="bg-gray-400/10 p-6 sm:p-10">
                <img
                  alt="Kasten K10 by Veeam logo"
                  src="/images/kasten-k10-logo.svg"
                  width={158}
                  height={48}
                  className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                />
              </div>
              <div className="bg-gray-400/10 p-6 sm:p-10">
                <img
                  alt="HashiCorp Vault logo"
                  src="/images/hashicorp-vault-logo.svg"
                  width={158}
                  height={48}
                  className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                />
              </div>
              <div className="bg-gray-400/10 p-6 sm:p-10">
                <img
                  alt="EnterpriseDB (EDB) logo"
                  src="/images/EnterpriseDB-logo.svg"
                  width={158}
                  height={48}
                  className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
